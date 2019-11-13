from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from django.contrib import messages

from .models import Books
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import booksSerializer,rateReviewSerializer
from django.db.models import Q



@api_view(['POST'])
def share_books(request):
    # if request.user.is_authenticated:
    data = request.data

    current_user = request.user.id

    print(current_user)
    serializer = booksSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def rateReviewbooks(request):
    # if request.user.is_authenticated:
    data = request.data

    serializer = rateReviewSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class booksList(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            query = self.request.GET.get('q')

            # results = Books.objects.filter(
            #     Q(title__icontains=query) | Q(intro__icontains=query) | Q(
            #         content__icontains=query))

            allBooks = Books.objects.all()
            serializer = booksSerializer(allBooks, many=True)
            return Response(serializer.data)
        else:
            messages.info(request, 'Log in first')
            return redirect('/login')
