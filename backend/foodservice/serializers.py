from foodservice.models import Product, Category
from rest_framework import serializers


class BaseProductSerializer(serializers.ModelSerializer):
    """
    Сеарилизатор данных модели Продуктов
    """

    class Meta:
        model = Product
        fields = ['id', 'title', 'category', 'description', 'image', 'price']

    def validate_title(self, value):
        if len(value) > 40:
            raise serializers.ValidationError("Title must be 40 characters or less.")
        if len(value) == 0:
            raise serializers.ValidationError("Title field must not be empty.")
        return value

    def validate_description(self, value):
        if len(value) > 150:
            raise serializers.ValidationError("Description must be 150 characters or less.")
        if len(value) == 0:
            raise serializers.ValidationError("Description field must not be empty.")
        return value

    def validate_price(self, value):
        if value < 1 or value > 9999:
            raise serializers.ValidationError("Price must be between 1 and 9999.")
        return value

    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class ProductSerializer(BaseProductSerializer):
    """
    Сеарилизатор данных модели Продуктов
    с количеством товара
    """

    class Meta(BaseProductSerializer.Meta):
        fields = BaseProductSerializer.Meta.fields + ['product_amount']

    def validate_product_amount(self, value):
        if value < 0:
            raise serializers.ValidationError("Product amount must be at least 0.")
        return value

class CategorySerializer(serializers.ModelSerializer):
    """
    Сеарилизатор данных модели Категорий
    """

    class Meta:
        model = Category
        fields = ['category']

    def validate_category(self, value):
        if len(value) > 128:
            raise serializers.ValidationError("Category must be 128 characters or less.")
        if len(value) == 0:
            raise serializers.ValidationError("Category field must not be empty.")
        return value

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
