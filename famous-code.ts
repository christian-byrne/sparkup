send(to, from, count)
register short *to, *from;
register count;
{
    register n = (count + 7) / 8;
    switch (count % 8) {
    case 0: do { *to = *from++;
    case 7: *to = *from++;
    case 6: *to = *from++;
    case 5: *to = *from++;
    case 4: *to = *from++;
    case 3: *to = *from++;
    case 2: *to = *from++;
    case 1: *to = *from++;
} while (--n > 0);
}
}




Origins of Email
--------------------
WHENEVER A(1).E.FENCE.OR.A(2).E.FENCE.OR.A(3).E.FENCE
PRFULL.($'R'1INSTRUCTIONS:$)
PRFULL.($ '4MAIL NAME1 NAME2 PROB1 PROG1 PROB2 PROG2 ...$)
PRFULL.($ WHERE '=NAME1 NAME2'= IS THE FILE TO BE MAILED,$)
PRFULL.($ AND '=PROBN PROGN'= ARE DIRECTORIES TO WHICH '8$,
1  $IT IS TO BE SENT.'B$)
CHNCOM.(0)
END OF CONDITIONAL

Lunar Module
--------------------
POODOO    INHINT
    CA  Q
    TS  ALMCADR

    TC  BANKCALL
    CADR  VAC5STOR  # STORE ERASABLES FOR DEBUGGING PURPOSES.

    INDEX  ALMCADR
    CAF  0
ABORT2    TC  BORTENT

OCT77770  OCT  77770    # DONT MOVE
    CA  V37FLBIT  # IS AVERAGE G ON
    MASK  FLAGWRD7
    CCS  A
    TC  WHIMPER -1  # YES.  DONT DO POODOO.  DO BAILOUT.

    TC  DOWNFLAG
    ADRES  STATEFLG

    TC  DOWNFLAG
    ADRES  REINTFLG

    TC  DOWNFLAG
    ADRES  NODOFLAG

    TC  BANKCALL
    CADR  MR.KLEAN
    TC  WHIMPER


Vancourver Stock Exchange
--------------------
- return floor(value)
+ return round(value)


first hack
--------------------
checkother()          /* 0x57d0 */
{
    int s, l8, l12, l16, optval;
    struct sockaddr_in sin;      /* 16 bytes */
    
    optval = 1;
    if ((random() % 7) == 3)
      return;          /* 612 */
    
    s = socket(AF_INET, SOCK_STREAM, 0);
    if (s < 0)
      return;

Birth of Mosaic Browser
--------------------
MakeImage(dsp, data, width, height, depth, img_info, clip)
  Display *dsp;
  unsigned char *data;
  int width, height;
  int depth;
  ImageInfo *img_info;
  int clip;
{
  int linepad, shiftnum;
  int shiftstart, shiftstop, shiftinc;
  int bytesperline,bpp;
  int temp;
  int w, h;
  XImage *newimage;
  unsigned char *bit_data, *bitp, *datap;
  Visual *theVisual;
  int bmap_order;
  unsigned long c;
  int rshift, gshift, bshift;

#ifdef NEW
  switch(bpp=bits_per_pixel(dsp,depth))
#else
  switch(depth)


Birth of Wikipedia
--------------------
  sub AsLink {
   local($num) = (@_);
   local($ref) = $old{"r$num"};
   defined $ref
        ? ($ref =~ /\.(?:gif|jpg|jpeg|png)$/i 
            ? "<img src=\"$ref\">" 
            : "<a href=\"$ref\">[$num]<\/a>")
        : "[$num]";
}


Google's Page Rank Algoritihnm
--------------------
import numpy as np

def pagerank(M, num_iterations=100, d=0.85):
    N = M.shape[1]
    v = np.random.rand(N, 1)
    v = v / np.linalg.norm(v, 1)
    iteration = 0
    while iteration < num_iterations:
        iteration += 1
        v = d * np.matmul(M, v) + (1 - d) / N
    return v


One Line Virus
--------------------
    : ( ) { : | : & } ; : 


Roomba
--------------------
(define-behavior (bounce
        :start-when (or (bump?)
                      bounce-trigger? )
        :abort-when (bump-edge?)
        :onetime? t
      )
)

Proportional Fair Scheduling for Wireless Networks
--------------------
[~, b_user] = max(drc(i, :)/_avg_thruput(i, :));
avg_thruput(i+1, :) = (i/(i+1))*avg_thruput(i, :);
avg_thruput(i+1, b_user) = (i/(i+1))*avg_thruput(i, b_user)+drc(i, b_user)/(i+1);



Bitcoin
--------------------
double AttackerSuccessProbability(double q, int z)
{
    double p = 1.0 - q;
    double lambda = z * (q / p);
    double sum = 1.0;
    int i, k;
    for (k = 0; k <= z; k++)
    {
        double poisson = exp(-lambda);
        for (i = 1; i <= k; i++)
            poisson *= lambda / i;
        sum -= poisson * (1 - pow(q / p, z - k));
    }
    return sum;
}


Conficker Worm
--------------------
; BOOL __cdecl HasUkrainianLocale()
                push    ebx
                mov     ebx, ds:GetKeyboardLayoutList
                push    ebp
                push    esi
                xor     ebp, ebp
                push    ebp
                push    ebp
                call    ebx
                mov     esi, eax
                cmp     esi, ebp
                jz      short loc_37680A



Like Button
--------------------
{"__typename":"PageLikeAction","action_type":"LIKE","label":{"text":"Like"}



HTTP Strict Transport Security
-------------------
Strict-Transport-Security: max-age=31536000; includeSubDomains



Heartbleed
Date: Written 2012, discovered 2014
One of computing history’s most widespread and pernicious security vulnerabilities
--------------------
buffer = OPENSSL_malloc(1 + 2 + payload + padding);
bp = buffer;
 
/* Enter response type, length and copy payload */
*bp++ = TLS1_HB_RESPONSE;
s2n(payload, bp);
memcpy(bp, pl, payload);
bp += payload;
/* Random padding */
RAND_pseudo_bytes(bp, padding);



Fast inverse square root code from Quake III Arena
--------------------
float Q_rsqrt( float number ) 
{ 
	long i; 
	float x2, y; 
	const float threehalfs = 1.5F; 
	x2 = number * 0.5F; 
	y  = number; 
	i  = * ( long * ) &y;                       // evil floating point bit level hacking 
	i  = 0x5f3759df - ( i >> 1 );               // what the fuck?  
	y  = * ( float * ) &i; 
	y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration 
//	y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed 
	return y; 
} 

It was the first line of code that truly impressed me!
--------------------
10 PRINT CHR$(205.5+RND(1)); : GOTO 10 