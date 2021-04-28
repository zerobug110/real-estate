from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse('hello world')


def news(request):
    return HttpResponse('news page')


def contact(request):
    return HttpResponse('contact page')
    