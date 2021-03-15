#include<eosio/eosio.hpp>
#include <eosio/crypto.hpp>
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

checksum256 string_to_hash(const string &input)
{
  return sha256(input.c_str(), input.size());
}


class [[eosio::contract]] volunteer : public contract {
   
  public:
     using contract::contract;

     [[eosio::action]] void accept_terms(name user,string name,uint64_t time ,uint16_t age){
         
        check(has_auth(name("NGO");
        //Need to create a account with NGO 

        volunteer_table _volunteer(get_self(),get_self.value());

        //if the record doesnt exist 
        _volunteer.emplace(get_self(),[&] auto &row{
            row.id=string_to_hash(name);
            row.name=name;
            row.time=time;
            row.age=age;
            row.ngo=user;

        });

    [[eosio::action]] void revoke(name user,string name,uint64_t time ,uint16_t age,string ngo) {

        volunteer_table _volunteer(get_self(),get_self.value());
        idx=string_to_hash(name);
        auto itr=_volunteer.begin();
        while (itr != _volunteer.end())
        {
        if (itr->volunteer == idx)
        {
        itr = _volunteer.erase(itr);
        return;
      }
      else
      {
      itr++;
      }
  }


    }
    
        
     }

  private :

  struct [[eosio::table]] volunteer{
      checksum256 id;
      string name;
      uint64_t time;
      uint16_t age;
      string ngo ;
   
      checksum256 primary_key() const {return id.value;}
      uint64_t get_secondary_key() const {return ngo;}
  };

  typedef multi_index <name("volunteer"),volunteer> volunteer_table;







}; 