from django.db import models


class Properties(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    size = models.CharField(max_length=255)
    image_url = models.CharField(max_length=2083)


