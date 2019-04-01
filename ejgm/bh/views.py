from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
import os

def index(request):
    template = loader.get_template('bh/yeet.html') #usually template1.html
    return HttpResponse(template.render({}, request));