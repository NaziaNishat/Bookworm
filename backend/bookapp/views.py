from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from django.contrib import messages

from . models import Books
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . serializers import booksSerializer

@api_view(['POST'])
def share_books(request):
    if request.user.is_authenticated:

        data = request.data
        serializer = booksSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    else:
        messages.info(request, 'Log in first')
        return redirect('/')

class booksList(APIView):
    def get(self,request):
        if request.user.is_authenticated:
            allBooks = Books.objects.all();
            serializer = booksSerializer(allBooks,many = True)
            return Response(serializer.data)
        else:
            messages.info(request, 'Log in first')
            return redirect('/')
