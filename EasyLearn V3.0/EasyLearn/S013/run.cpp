      #include<bits/stdc++.h>
#define int long long
const int N=1000010;int a[N];using namespace std;signed main(){int t;cin>>t;while(t--){int n,m;cin>>n>>m;for(int i=0;i<n;i++){cin>>a[i];}int ans=1;priority_queue<int>q1;priority_queue<int,vector<int>,greater<int>>q;int s=0;for(int i=m;i<n;i++){if(a[i]<0){q.push(a[i]);}s+=a[i];if(s<0){ans++;s+=2*abs(q.top());q.pop();}}s=0;for(int i=m-1;i>0;i--){if(a[i]>0){q1.push(a[i]);}s+=a[i];if(s>0){ans++;s-=2*q1.top();q1.pop();}}cout<<ans<<"\n";}return 0;}
