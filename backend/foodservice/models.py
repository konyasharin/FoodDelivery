from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models import CharField, TextField, PositiveIntegerField, ImageField


class Product(models.Model):
    """
    Модель Продуктов
    """
    title = CharField(max_length=40, verbose_name="title", null=False)
    category = CharField(max_length=128, verbose_name="category", null=False)
    description = TextField(verbose_name="description", null=False, max_length=150)
    product_amount = PositiveIntegerField(verbose_name="product_amount",
                                          null=False,
                                          validators=[MinValueValidator(1)])
    image = ImageField(upload_to="product_photos", verbose_name="image", null=False)
    price = PositiveIntegerField(verbose_name="price",
                                 null=False,
                                 validators=[MinValueValidator(1), MaxValueValidator(9999)])

    class Meta:
        db_table = "Product"
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return self.title
