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
    ProductDetailsByIdView, ProductListByCategoryView, ProductAmountByIdView, MissingProductCountView, ProductCountView, \
    ProductSearchView, CategoryCreateView, CategoryDeleteView
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
    path('products/', ProductCreateView.as_view(), name='product-create'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDeleteView.as_view(), name='product-delete'),
    path('products/<int:pk>/', ProductUpdateView.as_view(), name='product-update'),
    path('products/<int:pk>/', ProductDetailsByIdView.as_view(), name='product-details-by-id'),
    path('categories/<str:category>/', ProductListByCategoryView.as_view(),
         name='product-list-by-category'),
    path('products/<int:pk>/', ProductAmountByIdView.as_view(),
         name='product-amount-by-id'),
    path('products/count/', ProductCountView.as_view(), name='product-count'),
    path('products/missing_count/', MissingProductCountView.as_view(),
         name='missing-product-count'),
    path('products/search/', ProductSearchView.as_view(), name='product-search'),
    path('categories/', CategoryCreateView.as_view(), name='category-create'),
    path('categories/<int:pk>/', CategoryDeleteView.as_view(), name='category-delete'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)