# Generated by Django 2.2.7 on 2019-11-13 16:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bookapp', '0003_auto_20191113_1624'),
    ]

    operations = [
        migrations.AddField(
            model_name='ratereview',
            name='book',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='reviewed_book', to='bookapp.Books'),
        ),
        migrations.AddField(
            model_name='ratereview',
            name='rate_reviewer',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='rate_reviewer', to=settings.AUTH_USER_MODEL),
        ),
    ]
