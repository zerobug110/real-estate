from django.db import models


class properties(model.Model):
    name = model.models.CharField(max_length=50),
    price = model.models.FloatField(),
    stock = model.models.IntegerField(),
    image_url = model.models.CharField(max_length=2083)