
'''
class Media:
    __attrs__ = [
        'poster', 'casting', 'director', 'resumen', 'año', 'categoria', 'rating',
        'id', 'type', 'on_netflix', 'on_disney', 'on_hbo', 'on_prime', 'on_star', 'on_netflix', 'on_apple'
    ]
    def __init__(self, titulo, año=None, **kwargs):
        self.titulo = titulo
        self.año = año
        self.kwargs = kwargs

        if not self.kwargs:
            super(Media, self).__init__()
        else:
            self._set_data(kwargs)
        
    def _set_data(self, data_dict):
        for attr, value in data_dict.items():
            setattr(self, attr, value)

    def _populate(self):
        parametros = {
            "titulo" : self.titulo
        }

        if self.año:
             parametros['año'] = self.año

        response = Request(**parametros)
        data = response.json()

        if 'errorcode' in data:
            self._set_attrs_none()
            self.is_on_netflix = False
        else:
            self._set_data(data)
            self.is_on_netflix = True

        super(Media, self)._populate()
'''

    