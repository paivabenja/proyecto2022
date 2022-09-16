import json
import requests
import traceback

def search(plataformas=[], generos=[], año=''):
    endpoint = 'https://apis.justwatch.com/graphql'
    data = {
    'operationName': "GetPopularTitles",
    'query': "query GetPopularTitles($country: Country!, $popularTitlesFilter: TitleFilter, $watchNowFilter: WatchNowOfferFilter!, $popularAfterCursor: String, $popularTitlesSortBy: PopularTitlesSorting! = POPULAR, $first: Int! = 40, $language: Language!, $platform: Platform! = WEB, $sortRandomSeed: Int! = 0, $profile: PosterProfile, $backdropProfile: BackdropProfile, $format: ImageFormat) {\n  popularTitles(\n    country: $country\n    filter: $popularTitlesFilter\n    after: $popularAfterCursor\n    sortBy: $popularTitlesSortBy\n    first: $first\n    sortRandomSeed: $sortRandomSeed\n  ) {\n    totalCount\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n      __typename\n    }\n    edges {\n      ...PopularTitleGraphql\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment PopularTitleGraphql on PopularTitlesEdge {\n  cursor\n  node {\n    id\n    objectId\n    objectType\n    content(country: $country, language: $language) {\n      title\n      fullPath\n      scoring {\n        imdbScore\n        __typename\n      }\n      posterUrl(profile: $profile, format: $format)\n      ... on ShowContent {\n        backdrops(profile: $backdropProfile, format: $format) {\n          backdropUrl\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    likelistEntry {\n      createdAt\n      __typename\n    }\n    dislikelistEntry {\n      createdAt\n      __typename\n    }\n    watchlistEntry {\n      createdAt\n      __typename\n    }\n    watchNowOffer(country: $country, platform: $platform, filter: $watchNowFilter) {\n      id\n      standardWebURL\n      package {\n        packageId\n        clearName\n        __typename\n      }\n      retailPrice(language: $language)\n      retailPriceValue\n      lastChangeRetailPriceValue\n      currency\n      presentationType\n      monetizationType\n      availableTo\n      __typename\n    }\n    ... on Movie {\n      seenlistEntry {\n        createdAt\n        __typename\n      }\n      __typename\n    }\n    ... on Show {\n      seenState(country: $country) {\n        seenEpisodeCount\n        progress\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
        'variables': {
        'country': "AR",
        'first': 100,
        'language': "es",
        'platform': "WEB",
        'popularAfterCursor': "",
        'popularTitlesFilter': {
            'ageCertifications': [],
            'excludeGenres': [],
            'excludeIrrelevantTitles': False,
            'excludeProductionCountries': [],
            'genres': [generos],
            'monetizationTypes': [],
            'objectTypes': [],
            'packages': [plataformas],
            'presentationTypes': [],
            'productionCountries': [],
            'releaseYear':año
            },
        'popularTitlesSortBy': "POPULAR",
        'sortRandomSeed': 0,
        'watchNowFilter': {'packages': plataformas, 'monetizationTypes': []}
    }
    }
    print('pakages', data['variables']['popularTitlesFilter']['packages'])
    print('tipo de data', type(data))
    try:
        response = requests.post(endpoint, json=data)
        if response.status_code == 200:
            response_json = json.loads(response.text)
            media = response_json['data']['popularTitles']['edges']
            for i in media:
                title = i['node']['content']['title']
                platform = i['node']['watchNowOffer']['package']['clearName']
                print(title, platform)
            return media
        else:
            print(response.status_code)
            print('\n\n ERROR BRO \n\n')
    except Exception:
        print(traceback.format_exc())


def searchByName(name):
    endpoint = 'https://apis.justwatch.com/graphql'
    data = {
    'operationName': "GetSuggestedTitles",
    'query': "query GetSuggestedTitles($country: Country!, $language: Language!, $first: Int!, $filter: TitleFilter) {\n  popularTitles(country: $country, first: $first, filter: $filter) {\n    edges {\n      node {\n        ...SuggestedTitle\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment SuggestedTitle on MovieOrShow {\n  id\n  objectType\n  objectId\n  content(country: $country, language: $language) {\n    fullPath\n    title\n    originalReleaseYear\n    posterUrl\n    fullPath\n    __typename\n  }\n  __typename\n}\n",
        'variables': {
        'country': "AR",
        'first': 10,
        'language': "es",
        'filter': {'searchQuery': name}
    }
    }


    try:
        response = requests.post(endpoint, json=data)
        if response.status_code == 200:
            response_json = json.loads(response.text)
            media = response_json['data']['popularTitles']['edges']
            for i in media:
                title = i['node']['content']['title']
                release_year = i['node']['content']['originalReleaseYear']
                print(title, release_year)
            return media

        else:
            print(response.status_code)
            return 'error'
    except Exception:
        print(traceback.format_exc())



