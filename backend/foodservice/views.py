from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from foodservice.models import Product, Category
from foodservice.serializers import ProductSerializer, BaseProductSerializer, CategorySerializer
from rest_framework.filters import SearchFilter
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, UpdateAPIView, RetrieveAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response


def get_limit_offset_params(request):
    limit = request.query_params.get('limit', None)
    offset = request.query_params.get('offset', None)

    try:
        limit = int(limit) if limit is not None else None
    except ValueError:
        limit = None

    try:
        offset = int(offset) if offset is not None else None
    except ValueError:
        offset = None

    return limit, offset


class ProductCreateView(CreateAPIView):
    """
    Добавление данных Продукта
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class DefaultLimitOffsetPaginator(LimitOffsetPagination):
    """
    Default limit и offset
    """
    default_limit = None
    default_offset = None


class ProductListView(ListAPIView):
    """
    Список всех продуктов
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('limit', openapi.IN_QUERY, description="Limit", type=openapi.TYPE_INTEGER),
            openapi.Parameter('offset', openapi.IN_QUERY, description="Offset", type=openapi.TYPE_INTEGER),
        ]
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset()
        limit, offset = get_limit_offset_params(self.request)

        if limit is not None and offset is not None:
            return queryset[offset:offset + limit]
        elif limit is not None:
            return queryset[:limit]
        elif offset is not None:
            return queryset[offset:]
        else:
            return queryset


class ProductDeleteView(DestroyAPIView):
    """
    Удаление продукта
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductUpdateView(UpdateAPIView):
    """
    Обновление данных продукта по id
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailsByIdView(RetrieveAPIView):
    """
    Получение данных продукта по id
    """
    queryset = Product.objects.all()
    serializer_class = BaseProductSerializer


class ProductAmountByIdView(RetrieveAPIView):
    """
    Получение данных продукта с его количеством по id
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductListByCategoryView(ListAPIView):
    """
    Получение списка продуктов по выбранной категории
    """
    serializer_class = BaseProductSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        queryset = Product.objects.filter(category=category)
        limit, offset = get_limit_offset_params(self.request)

        if limit is not None and offset is not None:
            return queryset[offset:offset + limit]
        elif limit is not None:
            return queryset[:limit]
        elif offset is not None:
            return queryset[offset:]
        else:
            return queryset

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('category', openapi.IN_PATH, description="Category", type=openapi.TYPE_STRING),
            openapi.Parameter('limit', openapi.IN_QUERY, description="Limit", type=openapi.TYPE_INTEGER),
            openapi.Parameter('offset', openapi.IN_QUERY, description="Offset", type=openapi.TYPE_INTEGER),
        ]
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class ProductCountView(RetrieveAPIView):
    """
    Количество всех товаров
    """

    def get(self, request, *args, **kwargs):
        product_count = Product.objects.count()
        return Response({'count': product_count})

    def get_serializer(self, *args, **kwargs):
        if getattr(self, 'swagger_fake_view', False):
            return None
        return super().get_serializer(*args, **kwargs)


class MissingProductCountView(RetrieveAPIView):
    """
    Количество отсутствующих товаров
    """

    def get(self, request, *args, **kwargs):
        missing_products_count = Product.objects.filter(product_amount=0).count()
        return Response({'missing_products': missing_products_count})

    def get_serializer(self, *args, **kwargs):
        if getattr(self, 'swagger_fake_view', False):
            return None
        return super().get_serializer(*args, **kwargs)


class ProductSearchView(ListAPIView):
    """
    Поиск товара по названию и категории
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'category']

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('limit', openapi.IN_QUERY, description="Limit", type=openapi.TYPE_INTEGER),
            openapi.Parameter('offset', openapi.IN_QUERY, description="Offset", type=openapi.TYPE_INTEGER),
        ]
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset()
        limit, offset = get_limit_offset_params(self.request)

        if limit is not None and offset is not None:
            return queryset[offset:offset + limit]
        elif limit is not None:
            return queryset[:limit]
        elif offset is not None:
            return queryset[offset:]
        else:
            return queryset


class CategoryCreateView(CreateAPIView):
    """
    Создание категории
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDeleteView(DestroyAPIView):
    """
    Удаление категории
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
