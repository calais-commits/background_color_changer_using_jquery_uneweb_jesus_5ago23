<?php
    function migratoryBirds($arr) {
        // Write your code here
        $sigh= [0, 0, 0, 0, 0];
        $n= count($arr);
        $result= 5;
        for ($i= 0; $i < $n; $i++) {
            $sigh[$arr[$i] - 1]++;
        }
        for ($i= 3; $i >= 0; $i--) {
            if ($sigh[$i] >= $sigh[$result-1]) {
                $result= $i + 1;
            }
        }
        return $result;
    }

    $arr = [1,1,2,2,3];
    migratoryBirds($arr);
?>