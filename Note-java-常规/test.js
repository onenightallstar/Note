/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        if(null == root) return 0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int ans=0;
        while(!queue.isEmpty()){
            int size = queue.size();
            while(size>0){
                TreeNode node = queue.poll();
                if(null != node.left) queue.add(node.left);
                if(null != node.right) queue.add(node.right);
                size--;
            }
            ans++;
        }
        return ans;
    }
}