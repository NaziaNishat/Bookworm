
from django.contrib import admin
from django.urls import path,include
from bookapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('books/', views.booksList.as_view()),
    path('share/', views.share_books),

    # registration
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('register/', include('registration.urls')),
]
