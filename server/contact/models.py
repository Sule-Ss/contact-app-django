from django.db import models


class Contact(models.Model):
    gender_choices = (
        ('F', 'Female'),
        ('M', 'Male'),
        ('O', 'Other'),
    )
    username = models.CharField(max_length=30, unique=True)
    phoneNumber = models.CharField(max_length=15)
    gender = models.CharField(choices=gender_choices, max_length=1)
    
    def __str__(self):
        return f"{self.username}"