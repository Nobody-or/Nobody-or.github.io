      #include<bits/stdc++.h>
using namespace std;
int a[50];
int main(){
 //freopen("in.txt","r",stdin);
 //freopen("ans.txt","w",stdout);
 int t;
 cin>>t;
 while(t--){
  int n;
  cin>>n;
  for(int i=1;i<=n;i++){
   cin>>a[i];
  }
  stable_sort(a+1,a+1+n);
  for(int i=1;i<=n;i++){
   if(i<n) cout<<a[i]<<' ';
   else cout<<a[i]<<endl;
  }
 }
 return 0;
}

