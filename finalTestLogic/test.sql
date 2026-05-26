-- Nama : Mufid Isnan Ardianto

-- 01 Data Polis yang disubmit setelah tanggal 15 januari 2018 berdasarkan client yang lahir di bulan september
select 
    p.*
from T_POLICY p
join T_CLIENT c
    on p.CLIENT_NUMBER = c.CLIENT_NUMBER
where p.POLICY_SUBMIT_DATE > TO_DATE('15-01-2018', 'DD-MM-YYYY')
and extract(MONTH FROM c.BIRTH_DATE) = 9;

-- 02 Data Polis dengan status INFORCE, yang agentnya berkanto di Jakarta
select p.*
from T_POLICY p
join T_AGENT a
    on p.AGENT_CODE = a.AGENT_CODE
where p.POLICY_STATUS = 'INFORCE'
and a.AGENT_OFFICE = 'JAKARTA';

-- 03.
set a.BASIC_COMMISSION = (
    select ROUND((p.COMMISSION / p.PREMIUM) * 100, 2)
    from T_POLICY p
    where p.AGENT_CODE = a.AGENT_CODE
    and ROWNUM = 1
);

-- 04. 
update T_POLICY
set POLICY_DUE_DATE =
    LAST_DAY(POLICY_SUBMIT_DATE + 30);
commit;

select POLICY_NUMBER,
       POLICY_SUBMIT_DATE,
       POLICY_DUE_DATE
from T_POLICY;

-- 05
select
    a.AGENT_NAME,
    p.POLICY_NUMBER,
    p.PREMIUM,
    p.DISCOUNT,
    (p.PREMIUM - (p.PREMIUM * p.DISCOUNT / 100))
        AS FINAL_PREMIUM
from T_POLICY p
join T_AGENT a
    on p.AGENT_CODE = a.AGENT_CODE
where (p.PREMIUM - (p.PREMIUM * p.DISCOUNT / 100)) < 1000000
order by FINAL_PREMIUM asc;