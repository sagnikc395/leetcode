function isValid(s: string): boolean {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(s[i]);
        }
        else if(s[i]==='{'){
            stack.push(s[i]);
        }
        else if(s[i]==='['){
            stack.push(s[i]);
        }
        else if(s[i]===']'){
            //check tos is [ and return 
            if(s[0]==='['){
                stack.shift();
            }
        }
        else if(s[i]==='}'){
            if(s[0]==='{'){
                stack.shift();
            }
        }
        else if(s[i]===')'){
            if(s[0]==='('){
                stack.shift();
            }
        }
    }
    if(stack.length === 0){
        return true;
    }return false;
};