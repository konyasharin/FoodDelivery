import os

from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models import CharField, TextField, PositiveIntegerField, ImageField, ForeignKey


class Category(models.Model):
    category = CharField(max_length=128, verbose_name="category", null=False)

    class Meta:
        db_table = "Category"
        verbose_name = "Category"
        verbose_name_plural = "Category"

    def __str__(self):
        return self.category


class Product(models.Model):
    """
    Модель Продуктов
    """
    title = CharField(max_length=40, verbose_name="title", null=False)
    category = ForeignKey(Category, on_delete=models.CASCADE, verbose_name="category", related_name="products")
    description = TextField(verbose_name="description", null=False, max_length=150)
    product_amount = PositiveIntegerField(verbose_name="product_amount",
                                          null=False,
                                          validators=[MinValueValidator(0)])
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

    def delete(self, *args, **kwargs):
        if self.image:
            if os.path.isfile(self.image.path):
                os.remove(self.image.path)
        super().delete(*args, **kwargs)
