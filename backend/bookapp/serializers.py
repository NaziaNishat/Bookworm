from rest_framework import serializers
from . models import Books
from . models import RateReview


class rateReviewSerializer(serializers.ModelSerializer):
	class Meta:
		model = RateReview
		fields= '__all__'

class booksSerializer(serializers.ModelSerializer):
	reviews = rateReviewSerializer(many=True, read_only=True)

	class Meta:
		model = Books
		fields= 	'__all__'
		extra_fields =['reviews']