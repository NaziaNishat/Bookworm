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
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.mixins import UpdateModelMixin
from django.contrib.auth.hashers import make_password



UserModel = get_user_model()

class ProfileView(generics.ListCreateAPIView):
    # queryset = UserModel.objects.all()
    # serializer_class = UserSignUpSerializer
    def get(self, request):
        user_detail = UserModel.objects.get(pk=request.user.id)
        serializer = UserSignUpSerializer(user_detail)
        return Response(serializer.data)


@api_view(["PUT"])
def user_update(request):
    user = UserModel.objects.get(id=request.user.id)
    if request.method == "PUT":
        serializer = UserSignUpSerializer(user, data=request.data,partial = True)
        if serializer.is_valid():
            if ('password' in request.data):

                password = make_password(request.data['password'])
                print(password)
                serializer.save(password=password)
            else:
                serializer.save()
            # serializer.save()
            return Response(serializer.data)
        else:
            return Response({"error": serializer.errors, "error": True})
