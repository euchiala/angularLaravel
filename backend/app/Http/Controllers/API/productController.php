<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\product;
Use Log;


class productController extends Controller
{
    public function getAll(){
        $data = product::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['productname'] = $request['productname'];
        $data['description'] = $request['description'];
        $data['category'] = $request['category'];
        $data['quantite'] = $request['quantite'];
        $data['punitaire'] = $request['punitaire'];
        product::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = product::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = product::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
      $data['productname'] = $request['productname'];
        $data['description'] = $request['description'];
        $data['category'] = $request['category'];
        $data['quantite'] = $request['quantite'];
        $data['punitaire'] = $request['punitaire'];
        product::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
