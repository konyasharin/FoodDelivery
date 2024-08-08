"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from backend import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from foodservice.views import ProductCreateView, ProductListView, ProductDeleteView, ProductUpdateView, \
    ProductDetailsByIdView, ProductListByCategoryView, ProductAmountByIdView, MissingProductCountView, ProductCountView
from rest_framework import permissions

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/v1/create_product/', ProductCreateView.as_view(), name='product-create'),
    path('api/v1/products/', ProductListView.as_view(), name='product-list'),
    path('api/v1/delete_product/<int:pk>/', ProductDeleteView.as_view(), name='product-delete'),
    path('api/v1/update_product/<int:pk>/', ProductUpdateView.as_view(), name='product-update'),
    path('api/v1/product/<int:pk>/details/', ProductDetailsByIdView.as_view(), name='product-details-by-id'),
    path('api/v1/products/category/<str:category>/', ProductListByCategoryView.as_view(),
         name='product-list-by-category'),
    path('api/v1/product/<int:pk>/product_amount_details/', ProductAmountByIdView.as_view(),
         name='product-amount-by-id'),
    path('api/v1/product/product_count/', ProductCountView.as_view(), name='product-count'),
    path('api/v1/product/missing_product_count/', MissingProductCountView.as_view(),
         name='missing-product-count'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)