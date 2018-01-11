from operator import itemgetter
import csv
import re
def funk(filen):
    iList=[]
    with open(filen) as f:
        reader=f.readlines()
        for line in reader:
            x=line.split('\n')
            for item in x:
                if item!=[]:
                    fields=item.split('\t')
                    if fields!=['']:
                        if fields[23]=='FS' and fields[10]=='0':
                            toadd=[fields[3], fields[5], fields[8], fields[11], fields[22], fields[7], fields[12]]
                            iList.append(toadd)

    catlist=[]
    subcatlist=[]
    for item in iList:
        a=item[4]
        aa=re.sub('%', '',a)
        p=item[2]
        apk=((float(aa)*10)/float(p))
        item.append(round(apk, 2))        
        if item[3] not in catlist:
            catlist.append(item[3])
        else:
            pass
        if item[6] not in subcatlist:
            subcatlist.append(item[6])
        else:
            pass
    
    fList=iList
    for item in fList:
        item[7]=str(item[7])
        item[7]=re.sub('\.', '', item[7])
        if len(item[7])==2:
            item[7]=item[7]+'0'           
        item[0]=re.sub(',', '.', item[0])
    tempList=[]
    for item in fList:
        if item[3] == 'Smaksatt sprit':
            tempList.append(item)
    
        
    with open('smaksattSprit.csv', 'w', newline='') as outfile:
        writer=csv.writer(outfile, delimiter=',')
        writer.writerows(tempList)

funk('sort.csv')
