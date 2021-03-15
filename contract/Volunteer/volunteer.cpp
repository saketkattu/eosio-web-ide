#include<eosio/eosio.hpp>
using namespace eosio;
using namespace std;

// Here are the thing we need to d in this smart contract 
// 1. Check if Volunteer
//Auth
//Action 1: term agreement
//Action 2: Violation of terms
//Multi-index table :
//id( Primary )
//Name
//How many hours per week can you work
//Age
//NGO Name (Secondary index)

bool isVolunter(name accType){

}

class [[eosio::contract]] volunteer : public contract {
   
  public:
     using contract::contract;

     [[eosio::action]] void accept_terms(){
         
        require_auth(volunteer);
        
     }

  private :




}; 