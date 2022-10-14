<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PersonController;
use App\Http\Controllers\API\productController;
use App\Http\Controllers\API\orderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('person')->group(function () {
    Route::get('/',[ PersonController::class, 'getAll']);
    Route::post('/',[ PersonController::class, 'create']);
    Route::delete('/{id}',[ PersonController::class, 'delete']);
    Route::get('/{id}',[ PersonController::class, 'get']);
    Route::put('/{id}',[ PersonController::class, 'update']);
});
Route::prefix('product')->group(function () {
    Route::get('/',[ productController::class, 'getAll']);
    Route::post('/',[ productController::class, 'create']);
    Route::delete('/{id}',[ productController::class, 'delete']);
    Route::get('/{id}',[ productController::class, 'get']);
    Route::put('/{id}',[ productController::class, 'update']);
});
Route::prefix('order')->group(function () {
    Route::get('/',[ orderController::class, 'getAll']);
    Route::post('/',[ orderController::class, 'create']);
    Route::delete('/{id}',[ orderController::class, 'delete']);
    Route::get('/{id}',[ orderController::class, 'get']);
    Route::put('/{id}',[ orderController::class, 'update']);
});