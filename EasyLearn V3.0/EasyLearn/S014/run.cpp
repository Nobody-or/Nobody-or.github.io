      #include <bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(i=j;i<=k;++i)
#define dow(i,j,k) for(i=j;i>=k;--i)
#define pr pair
#define mkp make_pair
#define fi first
#define se second
const int N=1e6+10;
int c[N],h[N],stk[N],tp,n,t[N],ans;
void del(int x){
    if(t[c[x]]==1)--ans;
    --t[c[x]];
}
void add(int x){
    if(t[c[x]]==0)++ans;
    ++t[c[x]];
}
;int main(){//freopen("in.txt","r",stdin);freopen("ans.txt","w",stdout);
    ios::sync_with_stdio(false);
    int T,i,j;cin>>T;
    while(T--){
        cin>>n;ans=0;
        rep(i,1,n)cin>>c[i];rep(i,1,n)cin>>h[i];
        rep(i,1,n){
            while(tp && h[stk[tp]]<=h[i])del(stk[tp--]);
            add(stk[++tp]=i);
            cout<<ans;if(i<n)cout<<' ';
        }cout<<'\n';while(tp)del(stk[tp--]);
    }
}
