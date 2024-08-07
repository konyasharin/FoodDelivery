from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from foodservice.models import Product
from foodservice.serializers import ProductSerializer, BaseProductSerializer
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, UpdateAPIView, RetrieveAPIView
from rest_framework.pagination import LimitOffsetPagination


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
        limit = self.request.query_params.get('limit', None)
        offset = self.request.query_params.get('offset', None)

        if limit is not None:
            try:
                limit = int(limit)
            except ValueError:
                limit = self.pagination_class.default_limit

        if offset is not None:
            try:
                offset = int(offset)
            except ValueError:
                offset = self.pagination_class.default_offset

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


class ProductListByCategoryView(ListAPIView):
    """
    Получение списка продуктов по выбранной категории
    """
    serializer_class = BaseProductSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        queryset = Product.objects.filter(category=category)
        limit = self.request.query_params.get('limit', None)
        offset = self.request.query_params.get('offset', None)

        if limit is not None:
            try:
                limit = int(limit)
            except ValueError:
                limit = self.pagination_class.default_limit

        if offset is not None:
            try:
                offset = int(offset)
            except ValueError:
                offset = self.pagination_class.default_offset

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
