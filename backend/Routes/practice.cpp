#include <iostream>
#include <numeric>
#include <bits/stdc++.h>
#include <vector>

using namespace std;

class Solution {
public:
    int findMissing(vector<int>& arr) {
        // Write your code here
      int n = arr.size() + 1;
        int total = n * (n + 1) / 2;
        int sum = accumulate(arr.begin(), arr.end(), 0);
        return total - sum;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution ob;
        cout << ob.findMissing(arr) << endl;
    }
    return 0;
}