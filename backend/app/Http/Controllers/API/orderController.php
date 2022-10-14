<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\order;
Use Log;


class orderController extends Controller
{
    public function getAll(){
        $data = order::get();
        return response()->json($data, 200);
      }
      public function create(Request $request){
        $data['idPerson'] = $request['idPerson'];
        $data['produit'] = $request['produit'];
        $data['quantite'] = $request['quantite'];
        product::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = order::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = order::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['idPerson'] = $request['idPerson'];
        $data['produit'] = $request['produit'];
        $data['quantite'] = $request['quantite'];
        order::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
