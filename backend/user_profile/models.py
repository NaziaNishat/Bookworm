from django.db import models
from django.contrib.auth import get_user_model
from rest_framework.reverse import reverse

UserModel = get_user_model()

class Profile(models.Model):

    user = models.OneToOneField(UserModel, on_delete=models.CASCADE)
    occupation = models.CharField(max_length=100,default='student')


    def __str__(self):
        return self.user.username
    #
    # def get_profile_url(self):
    #     return reverse('profile_edit', kwargs={'pk': self.pk})

    class Meta:
        db_table = "UserProfile"

