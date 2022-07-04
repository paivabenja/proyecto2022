import requests
import traceback

def search(query, plataforma, tipo):
    platforma_link = 'proveedor%2F' + plataforma if plataforma else ''
    endpoint = 'https://apis.justwatch.com/graphql'
    data = {}

    try:
        response = requests.get(endpoint, data=data)
        if response.status_code == 200:
            for msg in response:
                print(msg)
        else:
            print(response.status_code)
    except Exception:
        print(traceback.format_exc())

search('q','hbo-max', 'series')