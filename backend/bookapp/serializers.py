from rest_framework import serializers
from . models import Books
from . models import RateReview

class booksSerializer(serializers.ModelSerializer):
	class Meta:
		model = Books
		fields= '__all__'

class rateReviewSerializer(serializers.ModelSerializer):
	class Meta:
		model = RateReview
		fields= ['ratings','review']