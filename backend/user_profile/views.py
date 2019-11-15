from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.utils import json
from rest_framework.views import APIView
from . models import Profile
from .serializers import ProfileSerializer
from rest_framework.response import Response
from registration.serializers import UserSignUpSerializer


UserModel = get_user_model()

class ProfileView(generics.ListCreateAPIView):
    # queryset = UserModel.objects.all()
    # serializer_class = UserSignUpSerializer
    def get(self, request):
        user_detail = UserModel.objects.get(pk=request.user.id)
        serializer = UserSignUpSerializer(user_detail)
        return Response(serializer.data)

@api_view(['POST'])
def updateProfile(request):
    # if request.user.is_authenticated:
    data = request.data

    current_user = request.user.id
    data['user']=current_user
    serializer = ProfileSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

