#include<eosio/eosio.hpp>
#include <eosio/crypto.hpp>
#include <eosio.token.hpp>
#include <vector>

using namespace eosio;
using namespace std;

// Here are the thing we need to d in this smart contract 
// 1. 
// 2.
// 3.
// 4.

checksum256 string_to_hash(const string &input)
{
  return sha256(input.c_str(), input.size());
}

class [[eosio::contract]] donate : public contract {
   
  public:
     using contract::contract;
  
  [[eosio::action]] void accept_terms(name user,string name,uint64_t amount){
         
        check(has_auth(name("NGO");
        //Need to create a account with NGO 

        donor_table _donor(get_self(),get_self.value());

        //if the record doesnt exist 
        _donor.emplace(get_self(),[&] auto &row{
            row.id=string_to_hash(name);
            row.name=name;
            row.ngo_donated.pushack(user);

        });
    
    [[eosio::on_notify("eosio.token::transfer")]]
    void on_transfer(name user,name to,asset quantity){

              check(quantity.amount>0,"Must be above 0");

             _donor.modify(get_self(),[&] auto &row{
            row.id=string_to_hash(name);
            row.amount+=quantity;
        
        });



}



  private :
/* id (Primary key)
Name
Total Amount Donated
NGO's donated : Array  */

struct [[eosio::table]] donors{
  checksum256 id;
  string name;
  uint64_t amount;
  vector<string> ngo_donated ;

  checksum256 primary_key() const {return id.value;}

};
 typedef multi_index <name("Donor"),donor> donor_table;

}; 