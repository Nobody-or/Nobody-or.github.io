      #include <bits/stdc++.h>

const int NMAX = 3e5 + 5, INF = 1e9;

int n, f[NMAX], d[NMAX];
std :: vector < std :: pair < int, int > > G[NMAX];

void DFS(int node, int t) {
    f[node] = true;

    for (int i = 0; i < G[node].size(); ++ i) {
        int u = G[node][i].first, c = G[node][i].second;

        if (f[u] == false) {
            d[u] = (c < t) + d[node];
            DFS(u, c);
        }
    }

    return;
}

int main() {
    std :: ios_base :: sync_with_stdio(false);
    std :: cin.tie(nullptr);
    
    int tc;
    
    std :: cin >> tc;
    
    while (tc --) {
        std :: cin >> n;
    
        for (int i = 1, u, v; i < n; ++ i) {
            std :: cin >> u >> v;
    
            G[u].push_back({v, i});
            G[v].push_back({u, i});
        }
        
        for (int i = 1; i <= n; ++ i)
            f[i] = false;
    
        d[1] = 0;
        DFS(1, n);
    
        int Max = 0;
    
        for (int i = 1; i <= n; ++ i)
            Max = std :: max(Max, d[i]);
    
        std :: cout << Max << "\n";
        
        for (int i = 1; i <= n; ++ i)
            G[i].clear();
    }

    return 0;
}
