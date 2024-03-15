      #include <bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(i=j;i<=k;++i)
#define dow(i,j,k) for(i=j;i>=k;--i)
#define pr pair
#define mkp make_pair
#define fi first
#define se second
const int N=2e5+10;
vector<pr<int,int> >G[N];
int n,f[N];
void dfs(int u,int fa,int val){
    for(auto v:G[u])if(v.fi!=fa){
        if(v.se>val)f[v.fi]=f[u];else f[v.fi]=f[u]+1;
        dfs(v.fi,u,v.se);
    }
}
int main(){//freopen("in.txt","r",stdin);freopen("ans.txt","w",stdout);
    int T,i,j;scanf("%d",&T);
    while(T--){
        scanf("%d",&n);int i;
        rep(i,1,n)G[i].clear();
        rep(i,2,n){
            int x,y;scanf("%d%d",&x,&y);
            G[x].push_back(mkp(y,i));G[y].push_back(mkp(x,i));
        }
        f[1]=1;
        dfs(1,0,0);
        int ans=0;
        rep(i,1,n)ans=max(ans,f[i]);
        printf("%d\n",ans);
    }
}
