from django.db import models


class Car(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    rent_deposit = models.DecimalField(max_digits=10, decimal_places=2)
    car_class = models.CharField(max_length=50)
    drive_unit = models.CharField(max_length=50)
    fuel_type = models.CharField(max_length=50)
    year = models.IntegerField()
    engine_power = models.IntegerField()
    transmission = models.CharField(max_length=50)
    description = models.TextField()
    car_number = models.CharField(max_length=50)
    car_photo_url = models.URLField()
    car_status = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.brand} {self.model}"
