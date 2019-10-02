from django.db import models


# Create your models here.
class Books(models.Model):
    """docstring for Books"""

    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    isbn = models.CharField(max_length=50, default='1E1E')
    thumbnail = models.CharField(max_length=150, default='https://SOME STRING')
    category = models.CharField(max_length=50, default='Others')
    availability = models.BooleanField(default=True)
    description = models.CharField(max_length=500, default='')

    def __str__(self):
        return self.title;

    class Meta:
        db_table = "books"
