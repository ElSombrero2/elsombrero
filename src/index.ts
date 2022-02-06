import { View } from './views/index';
import { Controller } from "./decorators/controller.decorator";
import { Delete, Get, Patch, Post, Put } from "./decorators/http.decorator";
import { Register } from "./decorators/register.decorator";
import { Injectable } from './decorators/injectable.decorator'

export { Register, Controller, Get, Put, Patch, Post, Delete, View, Injectable }