from . import db
from . import Media

class MediaDB(db.Model, Media):
    id = db.Column('id', db.Integer, primary_key=True)
    nombre = db.Column(db.String(30))
    tipo = db.Column(db.String(10))
    plataforma = db.Column(db.String(20))

    def __init__(self, nombre, tipo, plataforma, **kwargs):
        self.nombre = nombre
        self.plataforma = plataforma
        self.tipo = tipo
        self.kwargs = kwargs

        if not self.kwargs:
            super(Media, self).__init__()
        else:
            self._set_data(kwargs)
        
    def _set_data(self, data_dict):
        for attr, value in data_dict.items():
            setattr(self, attr, value)
    
    def __str__(self):
        return f'{self.id} {self.nombre} {self.mail} {self.contraseña}'

def nuevo_media(nombre, email, contraseña):
    media = Media(nombre=nombre, email=email, contraseña=contraseña)
    db.session.add(media)
    db.session.commit()
    return media