
from bs4 import BeautifulSoup
import requests
import sys

def scrapping(url):
    page = requests.get(url)
    content = BeautifulSoup(page.content,'html.parser')
    response = {}
    #Se extrae el titulo del producto
    response['name'] = content.find_all('title')[0].get_text().replace("Ripley - ","")
    infoEl_section = content.find_all(class_='product-info')
    infoEl_meta = list(infoEl_section)[0].children
    infoEl_ul = list(infoEl_meta)[0].children
    infoEl_li = list(list(infoEl_ul)[0].children)
    i = 0
    prices = []
    for li in infoEl_li:
        spanLi = list(li.children)
        
        j = 0
        element = []
        for span in spanLi:
            element.append(span.getText())
            j+=1
        prices.append(element)
        i +=1
    print(str(prices))
    index_delete = []
    for price_element in prices:
        if(len(price_element) != 2):
            index_delete.append(prices.index(price_element))
        else:

            if(price_element[0] == 'Descuento'):
                index_delete.append(prices.index(price_element))


    print("lista => "+str(list(reversed(index_delete))))
    indexReverse = list(reversed(index_delete))
    for indexDel in indexReverse:
        prices.pop(indexDel)
    for priceEl in prices:
        if(priceEl[0] == 'Normal'):
            response['normal_price'] = int(priceEl[1].replace("$","").replace(".",""))
        elif(priceEl[0] == 'Internet'):
            response['offer_price'] = int(priceEl[1].replace("$","").replace(".",""))
        elif(priceEl[0] == 'Tarjeta Ripley'):
            response['card_price'] = int(priceEl[1].replace("$","").replace(".",""))
        elif(priceEl[0] == 'Acumulas'):
            response['store_points'] = int(priceEl[1].replace(" RipleyPuntos","").replace(".",""))

    print (response)

    print("despues de eliminar => "+str(prices))

    """
    for element in infoEl:
        if(i == 0):
        elif(i == 1):
            response['offer_price'] = element.get_text().replace("$","")
        elif(i == 2):
            response['store_points'] = element.get_text().replace(" RipleyPuntos","")
        i += 1
    return response
    """

##Bloque principal inicio de prueba


def scrappingJumbo(url):
    page = requests.get(url)
    content = BeautifulSoup(page.content,'html.parser')
    contenidoArticulo = content.find_all(class_='inner product')
    contenidoTitulo = list(contenidoArticulo)[0].children
    title = (list(list(contenidoTitulo)[0].children))[0].getText()
    print(title)
    contenidoPrecio = list(content.find_all(class_='skuBestPrice'))[0].getText()
    precio = contenidoPrecio.strip("$ 00,").replace(".","")
    contentImage = list(content.find_all(class_='image-zoom',href=True))[0]
    urlImage = contentImage['href']
    archivo = open("temp.txt","w")
    archivo.write(title+"\n")
    archivo.write(precio+"\n")
    archivo.write(url+"\n")
    archivo.write(urlImage)
    archivo.close()


def scrappFatSecret(palabrasString):
    palabras = palabrasString.split("_")
    print(palabras)
    for palabra in palabras:
        print(palabra)
        url = "http://mobile.fatsecret.cl/calorías-nutrición/search?q="+palabra
        print (url)
        page = requests.get(url)
        content = BeautifulSoup(page.content,'html.parser')
        products = list(content.find_all(class_='inner-link',href=True))
        for product in products:
            urlProduct = "http://mobile.fatsecret.cl/calorías-nutrición"+product['href']
            productPage = requests.get(urlProduct)
            contentProduct = BeautifulSoup(productPage.content,'html.parser')
            productsDetail = list(contentProduct.find_all(class_='borderTop'))
            i = 0
            nombres =[]
            valores =[]
            for productDetail in productsDetail:
                if(i==0):
                    print("Nombre: " +productDetail.getText())
                    i=1
                else:
                    print("valor: " +productDetail.getText())
                    i=0
            #print (productsDetail)

##Main
#url = input("Ingrese la url: ")

#print(sys.argv[1].split("_"))
print("scrap => " +str(scrappingJumbo(sys.argv[1])))

#scrappFatSecret(sys.argv[1])
#palabras = ["pan","queso"]
#scrappFatSecret(palabras)


