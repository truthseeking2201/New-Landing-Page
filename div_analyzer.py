#!/usr/bin/env python3

import re
import sys

def analyze_div_structure(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    stack = []
    unmatched_lines = []
    
    for line_num, line in enumerate(lines, 1):
        # Count opening divs (excluding self-closing ones)
        opening_divs = len(re.findall(r'<div[^>]*>(?![^<]*/>)', line))
        
        # Count closing divs
        closing_divs = len(re.findall(r'</div>', line))
        
        # Add to stack for each opening div
        for _ in range(opening_divs):
            stack.append(line_num)
        
        # Remove from stack for each closing div
        for _ in range(closing_divs):
            if stack:
                stack.pop()
        
        # If line has opening divs, track them
        if opening_divs > 0:
            unmatched_lines.append((line_num, line.strip(), opening_divs, closing_divs))
    
    print(f"Total unmatched opening divs: {len(stack)}")
    print(f"Lines with unmatched opening divs: {stack}")
    
    # Show the last few sections to understand structure
    print("\n--- Last 20 lines with div operations ---")
    for line_num, line, opens, closes in unmatched_lines[-20:]:
        print(f"Line {line_num}: +{opens} -{closes} | {line[:80]}...")
    
    return stack

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python div_analyzer.py <path_to_file>")
        sys.exit(1)

    target_file = sys.argv[1]
    analyze_div_structure(target_file)
