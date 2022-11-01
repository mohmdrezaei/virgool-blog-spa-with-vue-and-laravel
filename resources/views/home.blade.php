<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <title>virgool blog</title>
    </head>
    <body >
    {{auth('sanctum')->user()}}
    <div id="app">
        <v-app>
            <router-view></router-view>
        </v-app>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
