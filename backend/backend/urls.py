
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views
from bookapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('books/', views.booksList.as_view()),
    path('sharesell/', views.share_books),

    # registration
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('register/', include('registration.urls')),

    # jwt_token
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('rate-review/', views.rateReviewbooks),

]
