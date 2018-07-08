
from bs4 import BeautifulSoup
import requests

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
    precio = int(contenidoPrecio.strip("$ 00,").replace(".",""))
    

    

##Main
url = input("Ingrese la url: ")


print("scrap => " +str(scrappingJumbo(url)))




