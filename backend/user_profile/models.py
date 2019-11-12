from django.db import models


# Create your models here.
class AllUsers(models.Model):

    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)


    def __str__(self):
        return self.username;

    class Meta:
        db_table = "books"
