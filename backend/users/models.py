from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    bio = models.TextField("biography", blank=True)
    birth_date = models.DateField("birth date", null=True, blank=True)

    github_profile = models.URLField("GitHub profile", blank=True)
    instagram_profile = models.URLField("Instagram profile", blank=True)

    def __str__(self):
        return self.username
