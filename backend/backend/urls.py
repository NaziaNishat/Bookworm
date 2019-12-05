
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views
from bookapp import views
from user_profile import views as user_views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('books/', views.booksList.as_view()),
    path('books/<int:pk>/', views.BookDetailView.as_view()),
    path('books/<int:pk>/books-request/', views.BookRequest.as_view()),

    path('sharesell/', views.share_books),

    # registration
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('register/', include('registration.urls')),

    # jwt_token
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('books/<int:pk>/rate-review/', views.rateReviewbooks),
    path('my-shared-books/', views.BookShareHistory.as_view()),
    path('my-books-for-sale/', views.BookSellHistory.as_view()),

    path('my-profile/', user_views.ProfileView.as_view()),
    path('edit-profile/', user_views.user_update),


]
